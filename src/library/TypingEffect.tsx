import { Heading } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js'
import './TypingEffect.css'

interface TypingEffectInterface {
    texts: string[]
    speed: number
    textname: string
}
const TypingEffect: Component<TypingEffectInterface> = (props) => {
    const { texts, speed, textname } = props

    let typedTextSpan: any
    let cursorSpan: any
    const textArray = texts;
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = speed; // Delay between current and next text
    // let textArrayIndex = 0;


    const [textArrayIndex, settextArrayIndex] = createSignal(0)
    const [charIndex, setcharIndex] = createSignal(0)

    const [textContent, setTextContent] = createSignal<string>('')

    function type() {
        if (charIndex() < textArray[textArrayIndex()].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex()].charAt(charIndex());
            setcharIndex(charIndex() + 1)
            setTimeout(type, typingDelay);

        }
        else {

            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);

        }
    }

    function erase() {
        if (charIndex() > 0) {

            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex()].substring(0, charIndex() - 1);
            setcharIndex(charIndex() - 1)
            setTimeout(erase, erasingDelay);

        }
        else {

            cursorSpan.classList.remove("typing");
            settextArrayIndex(textArrayIndex() + 1)
            if (textArrayIndex() >= textArray.length) settextArrayIndex(0);
            setTimeout(type, typingDelay + 1100);

        }
    }

    document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });


    return (
        <div class="container text-center py-5">
            <Heading size='2xl'> {textname} <span ref={typedTextSpan} class="typed-text text-orange-400"></span><span ref={cursorSpan} class="cursor">&nbsp;</span></Heading>
        </div>
    )
}

export default TypingEffect;
