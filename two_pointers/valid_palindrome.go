package two_pointers

func isPalindrome(inputString string) bool {

	beg := 0
	end := len(inputString) - 1
	for beg <= end {
		if inputString[beg] != inputString[end] {
			return false
		} else {
			beg += 1
			end -= 1
		}
	}

	return true
}
