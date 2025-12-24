import React from 'react'
import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./ui/input-group"

export function SearchBar({ onSearch, placeholder = "Search...", className }) {
  return (
    <InputGroup className={className}>
      <InputGroupInput
        placeholder={placeholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  )
}
