def create_anagrams(s):
    # check if length is even
    if len(s) % 2 != 0:
        return -1

    # split string into 2 substrings
    mid = len(s) // 2
    str1 = s[:mid]
    str2 = s[mid:]

    # create a frequency map for each substring
    freq_map1 = {}
    freq_map2 = {}

    # update frequency map for each substring
    for char in str1:
        freq_map1[char] = freq_map1.get(char, 0) + 1
    for char in str2:
        freq_map2[char] = freq_map2.get(char, 0) + 1

    # calculate number characters
    changes = 0

    # compare frequency map and count differences
    for char in freq_map1:
        if char not in freq_map2:
            changes += freq_map1[char]
        else:
            changes += abs(freq_map1[char] - freq_map2[char])

    return changes


# output result
print(create_anagrams(input()))

