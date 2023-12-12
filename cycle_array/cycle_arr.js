const circularArrayLoop = function(nums) {
    const n = nums.length;

    const next = function(position) {
        const val = nums[position];
        // Calculate the next position and ensure it's within bounds
        return ((position + val) % n + n) % n;
    };

    for (let i = 0; i < n; i++) {
        let slow = i;
        let fast = i;
        let positiveDir = nums[i] > 0;

        do {
            slow = next(slow);
            fast = next(next(fast));

            // Check for loop conditions
            if (slow === fast || nums[slow] > 0 !== positiveDir || nums[fast] > 0 !== positiveDir) {
                break;
            }
        } while (true);

        // Check if a loop is found
        if (fast === slow) {
            return true;
        }
    }

    return false;
};

console.log("cycle", circularArrayLoop([2,-1,1,2,2]))