import { Macbook } from "@/registry/designali/ui/apple/macbook"

export default function IPhone01() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Macbook variant="macbook-pro">
        <img
          src="/img/login-1.jpg"
          alt="App screen"
          className="h-full w-full object-cover"
        />
      </Macbook>
    </div>
  )
}
