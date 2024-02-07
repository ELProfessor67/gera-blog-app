"use client"
import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import SocialMedia from '@/components/SocialMedia';




const ArticleBody = ({ paras }) => {

    function deleyCalulater(i, speed) {
        if (i == 0) {
            return 0;
        }
        let text = '';
        for (let index = 0; index < i; index++) {
            text += paras[index]
        }
        return (text.length) * speed;

    }

    return (
        <div className="container">
            {
                paras?.map((data, i) => (
                    <p className='para font-dotted'>
                        <TypeWriterEffect
                            cursorColor="black"
                            text={data}
                            hideCursorAfterText={true}
                            typeSpeed={5}
                            startDelay={deleyCalulater(i, 5)}
                        />
                    </p>
                ))
            }
            <SocialMedia />
        </div>
    )
}

export default ArticleBody