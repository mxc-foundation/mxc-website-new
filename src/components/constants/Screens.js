
const screens = {
    phone:(...args) =>{
        const styles = args;
        return `@media (min-width:320px){
            ${styles}
        }`
    },
    smalltablet:(...args) =>{
        const styles = args;
        return `@media (min-width:481px){
            ${styles}
        }`
    },
    portraittablet:(...args) => {
        const styles = args;
        return `@media (min-width:641px){
            ${styles}
        }`
    },
    tablet:(...args) => {
        const styles = args;
        return `@media (min-width:961px){
            ${styles}
        }`
    },
    laptop:(...args) => {
        const styles = args;
        return `@media (min-width:1025px){
            ${styles}
        }`
    },
    desktop:(...args) => {
        const styles = args;
        return `@media (min-width:1281px){
            ${styles}
        }`
    },

    
}

export default screens