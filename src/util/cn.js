/**
 * Very useful for creating conditional css classnames.
 * @param  {...any} classes takes in multiple parameters. May take predicates which return string value
 * @returns Joined string of all parameters passed
 */
const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
}
 
export default cn;