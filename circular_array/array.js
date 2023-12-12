export function circularArrayLoop(nums){
    if(nums.length < 2) {
        return false
    }
    // define next
    function next(position, isForward) {
        let next = (position + nums[position]) % nums.length;
        if (next < 0) {
            next += nums.length;
        }
        if(next === position || nums[position] > 0 !== isForward) {
            return -1;
        }
        return next;
    }
    // logic
    for(let i = 0; i < nums.length; i++) {
        let slow = i;
        let fast = i;
        let isForward = nums[i] > 0;
        while(true) {
            slow = next(slow, isForward);
            fast = next(fast, isForward);
            if(fast !== -1) {
                fast = next(fast, isForward);
            }
            if(fast === -1 || slow === -1) {
                break;
            }
            if(slow === fast) {
                return true;
            }
        }
    }
    return false;
}