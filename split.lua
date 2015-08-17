function split(str, delimiter)
  local array = {}
  local regex = delimiter .. "[^" .. delimiter .. "]*" .. delimiter .. "-"
  for key in string.gmatch(str, regex) do
    table.insert(array, string.sub(key, 2, -1))
  end
  return array
end
