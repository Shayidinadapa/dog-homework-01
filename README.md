# The Dog Ate My Homework: Funniest Excuse

[![make.fun bounty](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Shayidinadapa/dog-homework-01/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Shayidinadapa/dog-homework-01/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

Entry for the [make.fun bounty "The Dog Ate My Homework: Funniest Excuse"](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c) — one line, under 200 characters, in which a dog explains why the homework got eaten, in the dog's own voice.

## The excuse

> It was on the floor. In my house. On the floor! What was I supposed to do — read it?

The dog was caught red-pawed and feels no remorse at all: homework left on the floor, in *his* house, is clearly fair game, and reading was never on the table.

## How it works

`main.ts` writes that single fixed line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_DIR`, then `/output/entry.txt`). Before writing it validates the gate — 1–200 characters, not only whitespace, no control characters — then reads the file back and throws on any mismatch. The output is fully deterministic: run it twice and the two files are byte-identical.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
