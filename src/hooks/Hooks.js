

export const onClickVariant = (index, el) => {
    console.log('el:', el, 'index:', index,);

}

export const widthProgressQuestion = (steps, questions) => {
    const progress = Math.round(steps / questions.length * 100)
    return progress
}

