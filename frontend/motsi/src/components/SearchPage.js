import React from 'react';
import '../components/styles/SearchPage.css';
import {Button} from '@material-ui/core';
import Result from './Result';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 stays -   26 august to 30 august  -   2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Routes</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <div className='search_page'></div>

            <Result
                img='https://images.unsplash.com/photo-1494964227851-d31bec6b1363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1446968947689-1929d80e2348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1574610339916-49646b1d8394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1619039324638-6fd30f080807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1608335631110-6093ca46d590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1539614119683-5bfaf2013b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
            <Result
                img='https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80'
                location='this is a location'
                title='this is a title'
                description='this is a result'
                star={'4.7'}
                price='55.66'
                total='$5345'
            />
        </div>
    )
}

export default SearchPage