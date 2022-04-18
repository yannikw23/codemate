// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: { variants: { gradient: { bgGradient: 'linear(to-l, #FF8888,#948BFF)', bgClip: 'text' } } },

    Link: {
      baseStyle: {
        bgGradient: 'linear(to-l, #FF8888,#948BFF)',
        bgClip: 'text',
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        _hover: {
          bgColor: 'pink.900',
        },
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
});

export default theme;
