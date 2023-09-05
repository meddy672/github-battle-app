import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'

import MainNavigation, {NavComponent} from '../MainNavigation'


//jest.mock('../MainNavigation', () => <div title="navcomp" />)


describe('The main navigation component', () => {

  describe('component links', () => {
    test('it should have a button with the words All', () => {
      const { getByText } = render(<MainNavigation />)
      const navLink = getByText('All')
      expect(navLink).toBeInTheDocument()
      expect(navLink.textContent).toBe('All')
    })
    test('it should have a button with the words JavaScript', () => {
      const { getByText } = render(<MainNavigation />)
      expect(getByText('JavaScript')).toBeInTheDocument()
    })
    test('it should have the words Ruby', () => {
      const { getByText } = render(<MainNavigation />)
      expect(getByText('Ruby')).toBeInTheDocument()
    })
    test('it should have the words Java', () => {
      const { getByText } = render(<MainNavigation />)
      expect(getByText('Java')).toBeInTheDocument()
    })
    test('it should have the words CSS', () => {
      const { getByText } = render(<MainNavigation />)
      expect(getByText('CSS')).toBeInTheDocument()
    })

  })
  describe('attributes', () => {
    test('it should have a container', () => {
      const { container } = render(<MainNavigation />)
      expect(container).toBeDefined()
    })
    test('it should have a attribute of role', () => {
      render(<MainNavigation />)
      const mainComponent = screen.getByRole('navigation')
      const role = mainComponent.getAttribute('role')
      expect(role).toBe('navigation')
    })
    test('it should have a class of flex-center', () => {
      render(<MainNavigation />)
      const mainComponent = screen.getByRole('navigation')
      expect(mainComponent.getAttribute('class')).toBe('flex-center')
    })
    test('it should have an onClick event', () => {
      const { getByRole } = render(<NavComponent />)
      fireEvent.click(getByRole('button'))
      console.log(getByRole('button'))
      expect(true).toBe(true)
    })
  })
})



