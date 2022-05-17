const example = ['messi', 'ronaldo', 'neymar', 'handerson']

export default (req, res) => {
  if (req?.query?.random === '1') {
    const randomData = example[Math.floor(Math.random() * example.length)]
    return res.status(200).json([randomData])
  }
  return res.satatus(200).json(example)
}
