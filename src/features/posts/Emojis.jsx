import React from "react";
import { useSelector } from "react-redux";


export default function Emojis() {

    const emojis = useSelector(state => state.emojis)

    const renderEmoji = emojis.map(emoji => (
        <div className="d-inline btn">
            <button>{emoji.emoji}</button>
            <span>{emoji.count}</span>
        </div>
    ))

    return (
        <div>
            {renderEmoji}
        </div>
    )
}