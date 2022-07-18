import {FC} from 'react'
import * as HIcons from '@heroicons/react/outline'

const DynamicHeroIcon: FC<{ icon: string }> = (props) => {
    const {...icons} = HIcons
    // @ts-ignore
    const TheIcon: JSX.Element = icons[props.icon]

    return (
        <>
            {/* @ts-ignore */}
            <TheIcon className="w-6 h-6 mx-2" aria-hidden="true"/>
        </>
    )
}

export default DynamicHeroIcon
