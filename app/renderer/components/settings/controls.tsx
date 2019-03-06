import React from 'react'
import { Switch } from './Switch'
import styles from './options.css'
import cx from 'classnames'

interface ISwitchOptionProps {
  inputId: string
  title: string
  description: string
  checked: boolean
  onChange: (val: boolean) => void
}

export const SwitchOption: React.SFC<ISwitchOptionProps> = props => {
  return (
    <div className={styles.option}>
      <div className={styles.title}>{props.title}</div>
      <Switch
        id={props.inputId}
        className={styles.switchContainer}
        defaultChecked={props.checked}
        onChange={props.onChange}
      />
      <div className={styles.description}>{props.description}</div>
    </div>
  )
}

export const Dropdown: React.SFC<React.SelectHTMLAttributes<{ children: React.ReactNode }>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select className={cx(className, styles.dropdown)} {...props}>
      {children}
    </select>
  )
}
