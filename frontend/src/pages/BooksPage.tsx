import { useState } from 'react'
import '../App.css'
import BookList from '../components/BookList'
import CategoryFilter from '../components/CategoryFilter'
import WelcomeBand from '../components/WelcomeBand'
import CartSummary from '../components/CartSummary'



function BooksPage () {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    return (
        <div className='container'>
          <CartSummary />
          <WelcomeBand />
        <div className='row'>
          <div className='col-md-3'>
          <CategoryFilter 
          selectedCategories={selectedCategories} 
          setSelectedCategories={setSelectedCategories}/>
          </div>
        <div className='col-md-9'>
          <BookList selectedCategories={selectedCategories}/>
        </div> 
      </div>
    </div>

    )
}

export default BooksPage; 