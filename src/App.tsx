import {Button} from "@/components/ui/button";

export function App() {
    return <div>
        <Button>BUTTON</Button>
        <Button as={'a'} href={'https://google.com'} >LINK</Button>


    </div>
}