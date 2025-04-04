import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { ChevronRight } from 'lucide-react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
type Props = TouchableOpacityProps & {
  name: string
  description: string
}

export function ExerciseCard({name, description, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://treinomestre.com.br/wp-content/uploads/2018/11/treino-peito-exercicios-peitoral-.jpg",
          }}
          alt="imagem do exercicio"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="$lg" fontFamily="$heading" color="$white">
            {name}
          </Heading>
          <Text fontSize="$sm" color="$gray700" mt="$1" numberOfLines={2}>
            {description}
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
