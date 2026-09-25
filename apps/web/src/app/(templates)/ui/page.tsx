import { ComponentPreview } from "@/src/components/docs/component-preview" 

const UI_COMPONENTS = ["accordion-01", "accordion-02", "button-02", "card-02"]

export default function Page() {
  return (
    <div className="mb-20 mt-3">
       
      <div className="m-3">
        <div className="grid w-full gap-3">
          {UI_COMPONENTS.map((name) => (
            <ComponentPreview key={name} name={name} align="center" />
          ))}
        </div>
      </div>
    </div>
  )
}
