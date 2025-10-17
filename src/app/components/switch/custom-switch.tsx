import "./custom-switch.css";
import { Switch, type SwitchProps } from "@headlessui/react";

const CustomSwitch = (props: SwitchProps) => {
    return (
        <Switch 
            {...props} 
            className="switch__container"
        >
            <span
                aria-hidden="true"
                className="switch__circle"
            />
        </Switch>
  )
}

export default CustomSwitch;