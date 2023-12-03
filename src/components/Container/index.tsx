import { cx } from "@utilities/cx"
import type { FC, HTMLAttributes, ReactNode } from "react"

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode | ReactNode[]
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx('container', className)}>
      {children}
    </div >
  )
}

export default Container