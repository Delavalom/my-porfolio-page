import { NavigationContext } from "~/Context/NavigationContext"
import { useContext } from "react"

export const useNavigation = () => {
    return useContext(NavigationContext)
}