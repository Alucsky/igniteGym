import {
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";
import { useAuth } from "@hooks/useAuth";
import defaultUserAvatar from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  const { user, signOut } = useAuth();
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultUserAvatar}
        alt="Imagem do usuario"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          {user.name}
        </Heading>
      </VStack>
      <Button onPress={signOut} bg="$gray600">
        <Icon as={LogOut} color="$gray200" size="xl" />
      </Button>
    </HStack>
  );
}
