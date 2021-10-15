import { AbstractField } from 'src/fields/AbstractField'
import { EditorFieldProps } from 'src/types'
import {
  IconAlignBottom,
  IconAlignLeft,
  IconAlignRight,
  IconAlignTop,
  IconTextCenter,
  IconTextLeft,
  IconTextRight,
} from 'src/components/Icons'
import { uniqId } from 'src/functions/string'
import { FunctionComponent } from 'preact'

const AlignmentIcons = {
  left: IconTextLeft,
  center: IconTextCenter,
  right: IconTextRight,
}

type FieldValue = keyof typeof AlignmentIcons

type FieldArgs = {
  label?: string
  vertical?: boolean
  default?: FieldValue
}

export class TextAlign extends AbstractField<FieldArgs, FieldValue> {
  get defaultArgs() {
    return {
      default: 'left' as FieldValue,
    }
  }

  field({ value, onChange }: EditorFieldProps<FieldValue>) {
    const handleChange = (e: Event) => {
      onChange((e.target as HTMLInputElement).value as FieldValue)
    }
    const alignements = Object.keys(AlignmentIcons)
    return (
      <div>
        {this.args.label && <label>{this.args.label}</label>}
        <div class="ve-alignments">
          {alignements.map((alignment) => (
            <AlignmentButton
              key={alignment}
              alignment={alignment}
              checked={value === alignment}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
    )
  }
}

function AlignmentButton({
  alignment,
  onChange,
  checked,
}: {
  alignment: FieldValue
  onChange: (e: Event) => void
  checked: boolean
}) {
  const IconComponent = AlignmentIcons[alignment]
  return (
    <div key={alignment} class="ve-alignment">
      <input
        type="radio"
        onChange={onChange}
        value={alignment}
        checked={checked}
      />
      <div>
        <IconComponent />
      </div>
    </div>
  )
}
