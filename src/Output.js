import React, { useState } from 'react'
import axios from 'axios'

function Output({ transcript }) {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [org, setOrg] = useState([]);
    let arr1;
    let arr2;
    const [product, setProduct] = useState([]);
    const handelSubmit = async () => {
        axios({
            url: "https://api.oneai.com/api/v0/pipeline",
            method: "POST",
            headers: {
                "api-key": "6d42828b-7b8a-46b5-9b89-a93b1764e799",
                "Content-Type": "application/json",
            },
            data: {
                input: transcript,
                input_type: "article",
                output_type: "json",
                multilingual: {
                    enabled: true
                },
                steps: [
                    {
                        skill: "summarize"
                    },
                    {
                        skill: "names"
                    },
                    {
                        skill: "highlights"
                    },
                    {
                        skill: "headline"
                    },
                    {
                        skill: "subheading"
                    }
                ],
            },
        }).then((response) => {
            console.log(response.data.output[0].labels)
            const labels = response.data.output[0].labels
            labels.map((obj) => {
                if (obj.type === "headline") {
                    setHeading(obj.value)
                }
                else if (obj.type === "subheading") {
                    setSubHeading(obj.value)
                }
                else {
                    if (obj.name === "ORG") {
                        // arr1.push(obj.value)
                        setOrg(obj.value)
                    }
                    else {
                        setProduct(obj.value)
                    }
                }
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h2>Heading</h2>
            Tesla Solar Roof Review: Was it Worth It?
            <br />
            <br />
            <h2>Sub Heading</h2>
            1 year with the Tesla solar roof
            <br />
            <br />
            <h2>Products</h2>
            {product}
            <br />
            <h2>Organizations</h2>
            {org}
        </div>
    )
}

export default Output
