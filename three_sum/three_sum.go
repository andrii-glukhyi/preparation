package three_sum

import (
	"sort"
)

func findSumOfThree(nums []int, target int) bool {
	if len(nums) < 3 {
		return false
	}
	sort.Ints(nums)
	pointer := 0
	for pointer < len(nums)-2 {
		start := pointer + 1
		end := len(nums) - 1
		for start < end {
			s := nums[pointer] + nums[start] + nums[end]
			if s == target {
				return true
			} else if s > target {
				end -= 1
			} else {
				start += 1
			}
		}
		pointer += 1
	}
	return false
}
