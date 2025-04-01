import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof GluestackButton> & {
  title: string
  variant?: 'solid' | 'outline'
  isloading?: boolean
}
export function Button({
  title,
  variant = 'solid',
  isloading = false,

  ...rest
}: Props) {
  return (
    <GluestackButton
      w="$full"
      h="$14"
      bg={variant === 'solid' ? '$green500' : 'transparent'}
      borderWidth={variant === 'solid' ? '$0' : '$1'}
      borderColor="$green500"
      rounded="$sm"
      disabled={isloading}
      $active-bg={variant === 'solid' ? '$green700' : '$gray700'}
      {...rest}
    >
      {isloading ? (
        <ButtonSpinner />
      ) : (
        <Text
          color={variant === 'solid' ? '$green500' : '$white'}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  )
}
