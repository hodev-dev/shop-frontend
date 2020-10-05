import React from 'react'

interface Props {
    variable: any,
    children: JSX.Element | Array<JSX.Element> | any
}

const CASE = (props: any) => {
    return (
        <>
            {props.children}
        </>
    )
}

const DEFAULT = (props: any) => {
    return (
        <>
            {props.children}
        </>
    )
}

const SWITCH = (props: Props) => {
    const { variable } = props;

    const renderCase = () => {
        var counter = 0;
        return props.children.map((child: any) => {
            if (child.props.check === variable) {
                counter++;
                return child;
            } else {
                if (child.props.check !== variable && child.type.name === "DEFAULT" && counter === 0) {
                    return child;
                } else {
                    return null;
                }
            }
        });
    }

    return (
        <>
            {renderCase()}
        </>
    )
}

export default SWITCH
export { CASE, DEFAULT }

