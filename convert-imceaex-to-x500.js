/**
 * See https://support.microsoft.com/en-us/kb/2807779
 * <blockquote>
 *     To create an X500 proxy address for the old
 *     LegacyExchangeDN attribute for the user, make the
 *     following changes based on the recipient address in
 *     the NDR:
 *     <ol>
 *         <li>Replace any underscore character (_) with a slash character (/).</li>
 *         <li>Replace "+20" with a blank space.</li>
 *         <li>Replace "+28" with an opening parenthesis character.</li>
 *         <li>Replace "+29" with a closing parenthesis character.</li>
 *         <li>Delete the "IMCEAEX-" string.</li>
 *         <li>Delete the "@mgd.domain.com" string.</li>
 *         <li>Add "X500:" at the beginning.</li>
 *     </ol>
 *     Note: The most common items will be replaced.
 *     However, there may be other symbols in the
 *     LegacyExchangeDN attribute that will also be changed
 *     from the way that they appear in the NDR. Generally,
 *     any character pattern of "+##" must be replaced with
 *     the corresponding ASCII symbol.
 * </blockquote>
 */
function convertIMCEAEXToX500(address) {
    var result = address;
    result = result.replace(/^mailto:/,'');
    if (result.includes('%')) {
        result = decodeURIComponent(result);
    }
    result = result.replace(/_/g, '/');
    result = result.replace(/\+20/g, ' ');
    result = result.replace(/\+28/g, '(');
    result = result.replace(/\+29/g, ')');
    result = result.replace(/^IMCEAEX-/,'');
    result = result.replace(/@[^@]+$/,'');
    result = result.replace(/^/,'X500:');
    return result;
}
