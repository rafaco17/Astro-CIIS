export const useColorWithOpacity = (backgroundColor: string, opacity: number) => {
     return `${backgroundColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
}