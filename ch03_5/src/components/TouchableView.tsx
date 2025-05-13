import React from "react";
import type {FC, ReactNode, ComponentProps} from 'react'
import { TouchableOpacity, View } from "react-native";

export type TouchableViewProps = { children?: ReactNode }

export const TouchableView: FC<TouchableViewProps> = ({children, ...touchableProps}) => {
    return (<TouchableOpacity {...touchableProps}>
        <View>{children}</View>
    </TouchableOpacity>)
}
