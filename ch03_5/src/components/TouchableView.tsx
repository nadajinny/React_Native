import React from "react";
import type {FC, ReactNode, ComponentProps} from 'react'
import { TouchableOpacity, View } from "react-native";

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

export type TouchableViewProps = TouchableOpacityProps

export const TouchableView: FC<TouchableViewProps> = ({children, ...touchableProps}) => {
    return (<TouchableOpacity {...touchableProps}>
        <View>{children}</View>
    </TouchableOpacity>)
}
