import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { storageAuthTokenSave } from "@storage/storageAuthToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import { createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
  signOut: () => Promise<void>;
};
type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }
  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      storageUserRemove();
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function storageUserAndToken(userData: UserDTO, token: string){
    try{
      setIsLoadingUserStorageData(true);
       setUser(userData);
       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       await storageUserSave(userData);
       await storageAuthTokenSave(token);

    }catch (err){
      throw err;
    }
    finally{
      setIsLoadingUserStorageData(false);
    }
       
  }
  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.tokens) {
        storageUserAndToken(data.user, data.tokens);
      }
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, isLoadingUserStorageData, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
