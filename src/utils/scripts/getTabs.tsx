import { Five, Four, One, Six, Three, Two } from "~/layout/components";

export const getTab = (index : number) => {
    if(index == 0) return <></>
    if(index == 1) return <One/>
    if(index == 2) return <Two/>
    if(index == 3) return <Three/>
    if(index == 4) return <Four/>
    if(index == 5) return <Five/>
    if(index == 6) return <Six/>
}

export const changeTab = (newValue: number, tab : number) => {
    if(tab == newValue) return 0
    return newValue
}