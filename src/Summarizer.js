import React, { useState } from 'react'
import axios from 'axios';
function Summarizer({ summary }) {

    return (
        <div>
            <p>{summary}</p>
        </div>
    )
}

export default Summarizer

