import { Button} from '@chakra-ui/react';
import type { ButtonProps } from '~/lib/utilities/schema';



export const ButtonComponent: React.FC<ButtonProps> = ({
  bg,
  color,
  text,
  width,
  onClick,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      py="23px"
      px="18px"
      borderRadius="12px"
      fontWeight="normal"
      w={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

