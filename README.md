# Employee of the Month Machine

Isaiah's Taco Truck has a little program that works out who gets employee of the month.

Jacob, Jose and Jsaiah wrote it. It does not work.

## What to do

1. Put this folder somewhere you will find it again and open it in VS Code.
2. Go Live, then open the Console.
3. Fix it until the whole file runs top to bottom with no errors and the answers are right.

**There are six bugs.** Every single one of them is something we covered this morning. You are not missing a piece of JavaScript you have never seen.

## Rules

- **Change one thing at a time, then look at the Console again.** This is the whole skill. Changing four things and reloading tells you nothing about which one mattered.
- **Do not rewrite the file.** Find the broken line and fix that line. Deleting a function and writing your own version does not count.

## What it should do when it works

- Print the three names
- Print the total tacos dropped this month
- Print how many shifts each person worked
- Print the average number of shifts
- Print how many people are eligible for employee of the month

If a number looks strange to you, it probably is. Check it by hand.

## When you are done

In your `README.md`, write up all six. For each one: what you saw, and what caused it. Symptom first, then cause.

## If you finish early

Three more, and these are **not** things we have covered. Do not go changing the file for these. Just open the Console, type them in, and see if you can work out what is going on.

```javascript
[10, 9, 100].sort()
```

```javascript
0.1 + 0.2
```

```javascript
typeof null
```

The first one does not give you `[9, 10, 100]`. The second one is not `0.3`. The third one claims `null` is an object.

All three are real and all three are famous.

bug 1 - line 14 - The Crew was undefined - .name was capitalized and caused the names to not show because the terminal didnt recognize it - game .Name a lowercase n

bug 2 - line 7 - Total Tacos Dropped displayed as "472" and not total tacos dropped - 7 on line 7 is a string and not integr, resulting in concatination, making a wrong number, removed the quotes around 7

bug 3 - line 19 - error: invalid assignment to const 'total' - total assinged to const and not let because it is being reassigned - changed const to let

bug 4 - line 28 - error: can't access property "name", crew[i] is undefined - for loop used less or equal to instead of less then, because less then works in for loop - replaced greater or less then with less then

bug 5 - line 38 - Average Shifts was undefined - averageShifts was not returning avg back - added "return avg;" under line 38

bug 6 - line 45 - Eligable employees was not counting the correct number of employees - if statement on line 45 was comparing warnings with == and not ===, which caused it to count warnings improperly - changed == to === 