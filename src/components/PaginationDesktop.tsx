import { Flex, IconButton, View } from "vcc-ui";
import ChevronIcon from "./icons/chevron-icon";

import styles from "../../public/css/paginationDesktop.module.css";

interface PaginationDesktopProps {
    onClickLeft: () => void,
    onClickRight: () => void,

}

export default function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktopProps) {
    return (
        <View bg="background.secodary"
            direction="row"
            justifyContent="space-between">



            <IconButton
                variant="outline"
                onClick={onClickLeft}
                aria-label="esquerda" iconName="navigation-chevronback" disabled />


            <IconButton
                variant="outline"
                onClick={onClickRight} aria-label="direita"
                iconName="navigation-chevronforward" />

        </View>
    )
}