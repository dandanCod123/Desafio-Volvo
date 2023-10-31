import { Flex, IconButton } from "vcc-ui";
import ChevronIcon from "./icons/chevron-icon";

interface PaginationDesktopProps {
    onClickLeft: () => void,
    onClickRight: () => void,

}

export default function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktopProps) {
    return (
        <Flex extend={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 0

        }}>

            <IconButton
                variant="outline"
                onClick={onClickLeft}
                aria-label="esquerda" iconName="navigation-chevronback" disabled />


            <IconButton
                variant="outline"
                onClick={onClickRight} aria-label="direita"
                iconName="navigation-chevronforward" />

        </Flex>
    )
}