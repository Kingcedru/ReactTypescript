import { ReactNode } from "react"
import Button from "./Exercise1";

interface prop{
  children: ReactNode;
}

function Alert({children}:prop) {
  return (
    <div>
      <div className="alert alert-primary">
        {children}
      </div>
      <Button>Click</Button>
    </div>
  )
}

export default Alert