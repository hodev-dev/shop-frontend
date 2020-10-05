import React from 'react'
import IF, { THEN } from './IF';
interface Props {
    variable: any,
    check: any;
    children: JSX.Element | Array<JSX.Element> | any
}

const UNLESS = (props: Props) => {
    const { variable, check } = props;

    return (
        <>
            <IF variable={variable} logic="!==" check={check}>
                <THEN>
                    {props.children}
                </THEN>
            </IF>
        </>
    )
}

export default UNLESS
