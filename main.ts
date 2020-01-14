/*
  split
*/
//% color=#006464 weight=20 icon="\uf1b9" block="split"
namespace split {
/**
 * TODO:文字列をカンマで分解する
 * @param text 文字列。, eg: "ABCD,abcd"
 */
//% blockId="文字列を分解" block="文字列を分解 %text"
//% weight=100 blockGap=8
    export function split(text: string):string[] {
        let work: string[] = []
        for (let index = 0; index < text.length ; index++) {
            if (text.charAt(index) == ",") {
                work.push("")
            } else {
                work[work.length] = work[work.length] + text.charAt(index)
            }
        }
        return work;
    }
}