import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from '@gluestack-ui/themed'
import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="$gray700">
        <Image
          w="$full"
          h={624}
          resizeMode="cover"
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="pessoas treinando"
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100" fontSize="$2xl">
              Crie sua conta
            </Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar a Senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
