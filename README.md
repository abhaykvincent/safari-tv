NPM Setup
Routing
    /home

    /schedule
    /programs
    /sancharam

    /buy-episode
    /buy-dvd

    /cart
    /login
    /signup
Itratable Data

        Sancharam                 1
        ---------------------------

            sancharam  
                country  
                    - country-id                                'string'
                    - country-name                              'string'
                    - country-description                       'string'
                    - country-cover                             'url'
                    - country-reviews                              Timestamp
                    - country-video
                        - video-duration                              Timestamp
                        - video-parts                              Timestamp
                            - video-part
                                - video-part-description
                                - video-part-duration
                                - video-part-format
                                - video-part-size

        Programs                  2
        ---------------------------

            programs
                program
                    - program-id                                'string'
                    - program-name                              'string'
                    - program-description                       'string'
                    - program-time                              Timestamp
                    - program-cover                             'url'


        Schedule                  3
        ---------------------------

            days                                            {object}
                day                                         [array]
                    - day-name                              'string'
                    - programs    --[2](program-id)         [array]
                        <- program-id                       ID
                        -> program-name                     'string'
                        <- program-time                     Timestamp
                        -> program-cover                    'Url'
        
        Episodes                  4
        ---------------------------

            episodes                                            
                    - programs    --[2](program-id)         
                        <- program-id                     
                            -> program-name                    
                            -> program-cover                    
                        available-episodes
                            episode-id
                            episode-no
                            episode-name
                            episode-cover
                            episode-premire
                            

        DVD                       5
        ---------------------------

            dvds
                - dvd-id    --                          'string'
                - dvd-name                              'string'
                - dvd-price                              Timestamp
                - dvd-cover                             'url'
                - dvd-items                             'url'

        Books                     6
        ---------------------------

            Books
                - book-id    --                          'string'
                - book-name                              'string'
                - book-price                              Timestamp
                - book-cover                             'url'
                - book-items                             'url'


TODO

KISS - Keep it Super Simple
!       
!!      
!!!     
!!!!    

'string'
[array]
{object}


!  Short Features

    Data collection
    Page Title - Head
    Header z-index
    Malayalam in-house Ad - align,size
    Menu
    Data collection

!! Component Feature

    Featured program - static data
    Featured dvd - static data
    Featured books - static data
    Header
    Footer
    footer links
        Home
        Programs
        Schedule
        Products

---------------------------------------------------

!!! Main Feature

!!!! Overall Features

    Static Data
    Responsive

    Dynamic Data
    Go Live





