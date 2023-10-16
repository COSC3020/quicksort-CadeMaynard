[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12356076&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyze the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## My Analysis:

The outermost loop is the simplest, it is simply $n$-time because all it does is increment through the list, the loop inside, where all the magic happens, is significantly more complicated. Because every part of the list is used as a pivot the worst case for this algorithm is a list in reverse order. Because this is in-place all of the values from the beginning of the list are going to have to be cycled to the end of the list. The first time this occurs it will take $n$-time because it is being cycled from the very beginning of the list to the very end. The second time this occurs it will take $n-1$-time because there is already the right variable at the end of the list and so on. Eventually, we get this equation for run time:

$$n\sum_{j=0}^{n-2}n-j$$
<br>
The $n-2$ is to account for the fact that after you have sorted the second to last variable, the last variable will already be sorted.

Seeing as $j$ functions as a constant here we can ignore it which leaves us with a sum of a single value which is equivalent to a multiplication. Ignoring constants we can replace the sum with
$$n(n-2)$$
Again, we ignore constants and insert into the original equation we get:
$$\Theta(n^3)$$
While this is a poor runtime, seeing as Quicksort's regular worst case is $n^2$ and our version is in-place, it makes enough sense that it would be less efficient to this degree.
