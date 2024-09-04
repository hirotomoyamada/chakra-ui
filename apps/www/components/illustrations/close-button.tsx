import { createComponent } from "./create-component"

export const CloseButtonAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x={165}
        y={115}
        width={71}
        height={71}
        rx={5.79592}
        fill={palette[3]}
      />
      <path
        d="M186.142 161.733C185.792 162.068 185.596 162.522 185.596 162.996C185.596 163.469 185.793 163.923 186.142 164.258C186.492 164.593 186.966 164.78 187.46 164.78C187.954 164.78 188.428 164.592 188.777 164.257L200.279 153.236C200.308 153.208 200.342 153.186 200.38 153.171C200.418 153.156 200.458 153.148 200.499 153.148C200.54 153.148 200.58 153.156 200.618 153.171C200.656 153.186 200.69 153.208 200.719 153.236L212.221 164.26C212.394 164.425 212.599 164.557 212.825 164.647C213.051 164.736 213.294 164.783 213.538 164.783C213.783 164.783 214.025 164.737 214.251 164.647C214.477 164.557 214.683 164.426 214.856 164.26C215.029 164.094 215.166 163.898 215.26 163.681C215.353 163.464 215.402 163.232 215.402 162.998C215.402 162.763 215.354 162.531 215.26 162.315C215.166 162.098 215.029 161.901 214.856 161.735L203.355 150.709C203.326 150.682 203.303 150.649 203.288 150.613C203.272 150.576 203.264 150.538 203.264 150.499C203.264 150.459 203.272 150.421 203.288 150.385C203.303 150.348 203.326 150.316 203.355 150.288L214.859 139.265C215.208 138.93 215.404 138.476 215.404 138.002C215.403 137.528 215.207 137.074 214.857 136.739C214.507 136.405 214.033 136.217 213.539 136.217C213.044 136.217 212.57 136.406 212.221 136.741L200.719 147.761C200.69 147.789 200.656 147.811 200.618 147.826C200.58 147.841 200.54 147.849 200.499 147.849C200.458 147.849 200.418 147.841 200.38 147.826C200.342 147.811 200.308 147.789 200.279 147.761L188.777 136.741C188.604 136.575 188.399 136.444 188.173 136.354C187.947 136.264 187.704 136.218 187.46 136.218C186.966 136.218 186.492 136.406 186.142 136.741C185.793 137.075 185.596 137.529 185.596 138.003C185.596 138.476 185.792 138.93 186.142 139.265L197.643 150.288C197.672 150.316 197.694 150.348 197.71 150.385C197.726 150.421 197.734 150.459 197.734 150.499C197.734 150.538 197.726 150.576 197.71 150.613C197.694 150.649 197.672 150.682 197.643 150.709L186.142 161.733Z"
        fill={palette[15]}
      />
    </svg>
  )
})