/* =========================================================
   CAMPUSCONNECT APPLICATION ENGINE
========================================================= */


/* =========================================================
   STORAGE
========================================================= */

let data = {

    tickets:
        JSON.parse(
            localStorage.getItem(
                "cc_tickets"
            )
        ) || [],

    listings:
        JSON.parse(
            localStorage.getItem(
                "cc_listings"
            )
        ) || [],

    lost:
        JSON.parse(
            localStorage.getItem(
                "cc_lost"
            )
        ) || [],

    events:
        JSON.parse(
            localStorage.getItem(
                "cc_events"
            )
        ) || [],

    opportunities:
        JSON.parse(
            localStorage.getItem(
                "cc_opportunities"
            )
        ) || [],

    applications:
        JSON.parse(
            localStorage.getItem(
                "cc_applications"
            )
        ) || [],

    registrations:
        JSON.parse(
            localStorage.getItem(
                "cc_registrations"
            )
        ) || [],

    notifications:
        JSON.parse(
            localStorage.getItem(
                "cc_notifications"
            )
        ) || [],

    profile:
        JSON.parse(
            localStorage.getItem(
                "cc_profile"
            )
        ) || {

            name:"Pratham Sao",

            id:"BCAN1CA25097",

            hostel:"Shantiniketan",

            room:"422"

        }

};


let currentRole = "student";


/* =========================================================
   SAVE
========================================================= */

function save(){

    localStorage.setItem(
        "cc_tickets",
        JSON.stringify(data.tickets)
    );

    localStorage.setItem(
        "cc_listings",
        JSON.stringify(data.listings)
    );

    localStorage.setItem(
        "cc_lost",
        JSON.stringify(data.lost)
    );

    localStorage.setItem(
        "cc_events",
        JSON.stringify(data.events)
    );

    localStorage.setItem(
        "cc_opportunities",
        JSON.stringify(data.opportunities)
    );

    localStorage.setItem(
        "cc_applications",
        JSON.stringify(data.applications)
    );

    localStorage.setItem(
        "cc_registrations",
        JSON.stringify(data.registrations)
    );

    localStorage.setItem(
        "cc_notifications",
        JSON.stringify(data.notifications)
    );

    localStorage.setItem(
        "cc_profile",
        JSON.stringify(data.profile)
    );

}


/* =========================================================
   INITIAL DATA
========================================================= */

function seedData(){

    if(!data.tickets.length){

        data.tickets = [

            {
                id:"CC-1024",

                category:"Electrical",

                location:"Hostel, Room 204",

                description:
                    "Ceiling fan is not working.",

                priority:"High",

                student:"Rahul Sharma",

                status:"In Progress",

                assignedTo:
                    "Maintenance Team",

                createdAt:
                    "29 Sep 2026",

                timeline:[

                    {
                        status:"Created",

                        text:
                            "Complaint submitted.",

                        time:
                            "09:20 AM"
                    },

                    {
                        status:"Assigned",

                        text:
                            "Assigned to Maintenance Team.",

                        time:
                            "09:40 AM"
                    },

                    {
                        status:"In Progress",

                        text:
                            "Work started.",

                        time:
                            "10:30 AM"
                    }

                ]

            },

            {
                id:"CC-1025",

                category:
                    "Wi-Fi / Internet",

                location:
                    "Hostel Floor 4",

                description:
                    "Wi-Fi connection is unstable.",

                priority:"Medium",

                student:"Aman Verma",

                status:"Assigned",

                assignedTo:"IT Support",

                createdAt:
                    "29 Sep 2026",

                timeline:[

                    {
                        status:"Created",

                        text:
                            "Complaint submitted.",

                        time:
                            "11:10 AM"
                    },

                    {
                        status:"Assigned",

                        text:
                            "Assigned to IT Support.",

                        time:
                            "11:20 AM"
                    }

                ]

            },

            {
                id:"CC-1026",

                category:"Plumbing",

                location:"Hostel Room 302",

                description:
                    "Water tap leaking.",

                priority:"Low",

                student:"Neha Singh",

                status:"Resolved",

                assignedTo:
                    "Plumbing Team",

                createdAt:
                    "28 Sep 2026",

                timeline:[

                    {
                        status:"Created",

                        text:
                            "Complaint submitted.",

                        time:
                            "03:20 PM"
                    },

                    {
                        status:"Resolved",

                        text:
                            "Leak repaired.",

                        time:
                            "06:00 PM"
                    }

                ]

            }

        ];

    }


    if(!data.listings.length){

        data.listings = [

            {
                id:"M-1001",

                name:
                    "Engineering Mathematics Book",

                category:"Books",

                price:450,

                condition:"Good",

                seller:"Aman",

                icon:"📚",

                description:
                    "Useful for first year engineering students."

            },

            {
                id:"M-1002",

                name:
                    "Scientific Calculator",

                category:"Electronics",

                price:700,

                condition:"Good",

                seller:"Rohit",

                icon:"🧮",

                description:
                    "Working scientific calculator."

            },

            {
                id:"M-1003",

                name:
                    "Study Table",

                category:"Furniture",

                price:1200,

                condition:"Used",

                seller:"Karan",

                icon:"🪑",

                description:
                    "Compact hostel study table."

            },

            {
                id:"M-1004",

                name:
                    "DBMS Notes",

                category:"Study Material",

                price:100,

                condition:"Good",

                seller:"Priya",

                icon:"📄",

                description:
                    "Semester examination notes."

            }

        ];

    }


    if(!data.lost.length){

        data.lost = [

            {
                id:"L-1001",

                type:"Lost",

                item:"Black Wallet",

                location:"Library",

                date:"2026-09-28",

                description:
                    "Black leather wallet.",

                status:"Open",

                icon:"👛"

            },

            {
                id:"L-1002",

                type:"Found",

                item:"USB Drive",

                location:"Computer Lab",

                date:"2026-09-29",

                description:
                    "32GB USB drive.",

                status:"Open",

                icon:"💾"

            },

            {
                id:"L-1003",

                type:"Found",

                item:"Student ID Card",

                location:"Cafeteria",

                date:"2026-09-29",

                description:
                    "ID card found near cafeteria.",

                status:"Open",

                icon:"🪪"

            }

        ];

    }


    if(!data.events.length){

        data.events = [

            {
                id:"E-1001",

                name:
                    "Campus Hackathon 2026",

                date:"2026-10-10",

                venue:
                    "Innovation Lab",

                organizer:
                    "Coding Club",

                description:
                    "24-hour campus coding challenge.",

                registrations:12

            },

            {
                id:"E-1002",

                name:
                    "Entrepreneurship Workshop",

                date:"2026-10-04",

                venue:
                    "Seminar Hall",

                organizer:
                    "E-Cell",

                description:
                    "Startup ideation and validation workshop.",

                registrations:24

            },

            {
                id:"E-1003",

                name:
                    "Freshers Cultural Night",

                date:"2026-10-02",

                venue:
                    "Main Auditorium",

                organizer:
                    "Student Council",

                description:
                    "Music, dance and cultural performances.",

                registrations:48

            }

        ];

    }


    if(!data.opportunities.length){

        data.opportunities = [

            {
                id:"O-1001",

                title:
                    "Frontend Developer Intern",

                type:"Internship",

                company:
                    "TechNova",

                location:
                    "Remote",

                deadline:
                    "2026-10-15",

                description:
                    "Work on modern web applications.",

                icon:"💻"

            },

            {
                id:"O-1002",

                title:
                    "Campus AI Hackathon",

                type:"Hackathon",

                company:
                    "Innovation Hub",

                location:
                    "Online",

                deadline:
                    "2026-10-20",

                description:
                    "Build an AI-powered solution.",

                icon:"🤖"

            },

            {
                id:"O-1003",

                title:
                    "Data Analyst Intern",

                type:"Internship",

                company:
                    "DataWorks",

                location:
                    "Hybrid",

                deadline:
                    "2026-10-12",

                description:
                    "Analyze business and student datasets.",

                icon:"📊"

            },

            {
                id:"O-1004",

                title:
                    "Smart Campus Hackathon",

                type:"Hackathon",

                company:
                    "Campus Innovation Cell",

                location:
                    "Gwalior",

                deadline:
                    "2026-10-25",

                description:
                    "Build technology for campus problems.",

                icon:"🏫"

            }

        ];

    }


    save();

}


/* =========================================================
   NAVIGATION
========================================================= */

document
.querySelectorAll(".nav-btn")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showView(
                button.dataset.view
            );

        }
    );

});


function showView(view){

    document
    .querySelectorAll(".view")
    .forEach(v =>
        v.classList.remove("active")
    );


    const selected =
        document.getElementById(view);


    if(selected)
        selected.classList.add("active");


    document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.view === view
        );

    });


    const titles = {

        dashboard:
            "Student Dashboard",

        maintenance:
            "Smart Maintenance",

        marketplace:
            "Student Marketplace",

        lostfound:
            "Lost & Found",

        events:
            "Campus Events",

        opportunities:
            "Internship & Hackathon Board",

        admin:
            "Institution Operations",

        profile:
            "My Profile",

        future:
            "Product Roadmap"

    };


    document.getElementById(
        "pageTitle"
    ).textContent =
        titles[view] || "CampusConnect";


    closeMobileSidebar();


    refresh();

}


/* =========================================================
   ROLE
========================================================= */

document
.getElementById("roleSelect")
.addEventListener(
    "change",
    function(){

        currentRole =
            this.value;


        document
        .querySelectorAll(".staff-only")
        .forEach(element => {

            element.style.display =
                currentRole === "staff"
                ? "block"
                : "none";

        });


        showView("dashboard");

    }
);


/* =========================================================
   MOBILE
========================================================= */

document
.getElementById("mobileMenu")
.addEventListener(
    "click",
    () => {

        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open");
        if(sidebarOverlay){
            sidebarOverlay.classList.toggle("show", sidebar.classList.contains("open"));
        }

    }
);


/* =========================================================
   MOBILE SIDEBAR ENHANCEMENT
========================================================= */

const sidebarOverlay = document.getElementById("sidebarOverlay");

function closeMobileSidebar(){
    document.getElementById("sidebar").classList.remove("open");
    if(sidebarOverlay) sidebarOverlay.classList.remove("show");
}

if(sidebarOverlay){
    sidebarOverlay.addEventListener("click", closeMobileSidebar);
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function notify(
    title,
    message
){

    data.notifications.unshift({

        title,

        message,

        time:
            new Date()
            .toLocaleTimeString(
                "en-IN",
                {
                    hour:"2-digit",
                    minute:"2-digit"
                }
            )

    });


    data.notifications =
        data.notifications.slice(
            0,
            20
        );


    save();

    renderNotifications();

}


function renderNotifications(){

    document
    .getElementById(
        "notificationCount"
    )
    .textContent =
        data.notifications.length;


    const container =
        document.getElementById(
            "notificationList"
        );


    if(!data.notifications.length){

        container.innerHTML =
            `<div class="empty">
                No notifications.
            </div>`;

        return;

    }


    container.innerHTML =
        data.notifications
        .map(n => `

            <div class="notification">

                <strong>
                    ${safe(n.title)}
                </strong>

                <p>
                    ${safe(n.message)}
                </p>

                <p>
                    ${safe(n.time)}
                </p>

            </div>

        `)
        .join("");

}


document
.getElementById(
    "notificationButton"
)
.addEventListener(
    "click",
    () => {

        document
        .getElementById(
            "notificationPanel"
        )
        .classList.toggle("show");

    }
);


function clearNotifications(){

    data.notifications = [];

    save();

    renderNotifications();

}


/* =========================================================
   MAINTENANCE
========================================================= */

document
.getElementById("maintenanceForm")
.addEventListener(
    "submit",
    function(e){

        e.preventDefault();


        const id =
            "CC-" +
            (
                1000 +
                data.tickets.length +
                1
            );


        const ticket = {

            id,

            category:
                document.getElementById(
                    "mCategory"
                ).value,

            location:
                document.getElementById(
                    "mLocation"
                ).value,

            priority:
                document.getElementById(
                    "mPriority"
                ).value,

            student:
                document.getElementById(
                    "mStudent"
                ).value,

            description:
                document.getElementById(
                    "mDescription"
                ).value,

            status:
                "Assigned",

            assignedTo:
                "Maintenance Team",

            createdAt:
                new Date()
                .toLocaleDateString(
                    "en-IN"
                ),

            timeline:[

                {
                    status:"Created",

                    text:
                        "Complaint submitted.",

                    time:
                        new Date()
                        .toLocaleTimeString(
                            "en-IN"
                        )

                },

                {
                    status:"Assigned",

                    text:
                        "Assigned to Maintenance Team.",

                    time:
                        new Date()
                        .toLocaleTimeString(
                            "en-IN"
                        )

                }

            ]

        };


        data.tickets.unshift(
            ticket
        );


        save();


        notify(

            "Complaint Created",

            `${id} has been created successfully.`

        );


        this.reset();


        alert(
            "Complaint submitted successfully!\n\nTicket ID: " +
            id
        );


        refresh();

    }
);


/* =========================================================
   MAINTENANCE TICKETS
========================================================= */

function renderMaintenance(){

    const container =
        document.getElementById(
            "maintenanceTickets"
        );


    if(!data.tickets.length){

        container.innerHTML =
            `<div class="empty">
                No complaints yet.
            </div>`;

        return;

    }


    container.innerHTML =
        data.tickets
        .map(ticket => `

            <div
                class="ticket"
                onclick="openTicket('${ticket.id}')">

                <div class="ticket-top">

                    <span class="ticket-id">
                        ${safe(ticket.id)}
                    </span>

                    ${statusBadge(
                        ticket.status
                    )}

                </div>


                <div class="ticket-title">

                    ${safe(
                        ticket.category
                    )}

                </div>


                <div class="ticket-meta">

                    📍
                    ${safe(
                        ticket.location
                    )}

                </div>


                <div class="ticket-meta">

                    Priority:
                    ${safe(
                        ticket.priority
                    )}

                </div>

            </div>

        `)
        .join("");

}


/* =========================================================
   TICKET STATUS
========================================================= */

function statusBadge(status){

    let cls =
        status === "Resolved"
        ? "badge-green"
        : status === "In Progress"
        ? "badge-orange"
        : "badge-blue";


    return `
        <span class="badge ${cls}">
            ${safe(status)}
        </span>
    `;

}


function changeTicketStatus(
    id,
    newStatus
){

    const ticket =
        data.tickets.find(
            t => t.id === id
        );


    if(!ticket)
        return;


    ticket.status =
        newStatus;


    ticket.timeline.push({

        status:newStatus,

        text:
            `Ticket moved to ${newStatus}.`,

        time:
            new Date()
            .toLocaleTimeString(
                "en-IN"
            )

    });


    save();


    notify(

        "Ticket Updated",

        `${id} is now ${newStatus}.`

    );


    refresh();

}


/* =========================================================
   TICKET MODAL
========================================================= */

function openTicket(id){

    const ticket =
        data.tickets.find(
            t => t.id === id
        );


    if(!ticket)
        return;


    document.getElementById(
        "ticketModalTitle"
    ).textContent =
        `${ticket.id} — ${ticket.category}`;


    const timeline =
        ticket.timeline
        .map(item => `

            <div class="timeline-item">

                <h4>
                    ${safe(
                        item.status
                    )}
                </h4>

                <p>
                    ${safe(
                        item.text
                    )}
                </p>

                <p>
                    ${safe(
                        item.time
                    )}
                </p>

            </div>

        `)
        .join("");


    document.getElementById(
        "ticketModalBody"
    ).innerHTML = `

        <p>
            <strong>
                Location:
            </strong>

            ${safe(
                ticket.location
            )}

        </p>


        <p style="margin-top:8px">

            <strong>
                Student:
            </strong>

            ${safe(
                ticket.student
            )}

        </p>


        <p style="margin-top:8px">

            <strong>
                Priority:
            </strong>

            ${safe(
                ticket.priority
            )}

        </p>


        <p style="margin-top:8px">

            <strong>
                Assigned To:
            </strong>

            ${safe(
                ticket.assignedTo
            )}

        </p>


        <div
            class="card"
            style="margin-top:15px;box-shadow:none">

            <strong>
                Description
            </strong>

            <p
                style="
                color:var(--muted);
                margin-top:7px;
                line-height:1.5">

                ${safe(
                    ticket.description
                )}

            </p>

        </div>


        <h4
            style="
            margin-top:20px;
            color:var(--navy)">

            Ticket Timeline

        </h4>


        <div class="timeline">

            ${timeline}

        </div>


        ${
            currentRole === "staff"
            ?

            `

            <div
                class="action-row"
                style="margin-top:15px">

                <button
                    class="btn btn-small btn-light"
                    onclick="
                    changeTicketStatus(
                        '${ticket.id}',
                        'Assigned'
                    )">

                    Assigned

                </button>


                <button
                    class="btn btn-small btn-light"
                    onclick="
                    changeTicketStatus(
                        '${ticket.id}',
                        'In Progress'
                    )">

                    In Progress

                </button>


                <button
                    class="btn btn-small btn-orange"
                    onclick="
                    changeTicketStatus(
                        '${ticket.id}',
                        'Resolved'
                    )">

                    Resolve

                </button>

            </div>

            `

            :

            ""

        }

    `;


    openModal(
        "ticketModal"
    );

}


/* =========================================================
   ADMIN KANBAN
========================================================= */

function renderAdmin(){

    const columns = {

        Assigned:
            document.getElementById(
                "assignedTickets"
            ),

        "In Progress":
            document.getElementById(
                "progressTickets"
            ),

        Resolved:
            document.getElementById(
                "resolvedTickets"
            )

    };


    Object.values(columns)
    .forEach(c => c.innerHTML="");


    data.tickets.forEach(
        ticket => {

            const html = `

                <div class="kanban-card">

                    <h5>
                        ${safe(
                            ticket.id
                        )}
                    </h5>

                    <p>
                        ${safe(
                            ticket.category
                        )}
                    </p>

                    <p>
                        📍
                        ${safe(
                            ticket.location
                        )}
                    </p>

                    <div class="action-row">

                        <button
                            class="btn btn-small btn-light"
                            onclick="
                            changeTicketStatus(
                                '${ticket.id}',
                                'Assigned'
                            )">

                            Assigned

                        </button>

                        <button
                            class="btn btn-small btn-light"
                            onclick="
                            changeTicketStatus(
                                '${ticket.id}',
                                'In Progress'
                            )">

                            Progress

                        </button>

                        <button
                            class="btn btn-small btn-orange"
                            onclick="
                            changeTicketStatus(
                                '${ticket.id}',
                                'Resolved'
                            )">

                            Resolve

                        </button>

                    </div>

                </div>

            `;


            if(columns[ticket.status])
                columns[
                    ticket.status
                ].innerHTML += html;

        }
    );


    Object.values(columns)
    .forEach(c => {

        if(!c.innerHTML){

            c.innerHTML =
                `<div class="empty">
                    No tickets
                </div>`;

        }

    });


    renderAnalytics();

}


/* =========================================================
   ANALYTICS
========================================================= */

function renderAnalytics(){

    const counts = {};


    data.tickets.forEach(
        ticket => {

            counts[
                ticket.category
            ] =
                (
                    counts[
                        ticket.category
                    ] || 0
                ) + 1;

        }
    );


    const total =
        data.tickets.length || 1;


    document.getElementById(
        "categoryAnalytics"
    ).innerHTML =

        Object.entries(counts)
        .map(
            ([category,count]) => {

                const percentage =
                    Math.round(
                        count /
                        total *
                        100
                    );


                return `

                    <div
                        style="margin-bottom:14px">

                        <div
                            style="
                            display:flex;
                            justify-content:space-between;
                            font-size:11px">

                            <strong>
                                ${safe(
                                    category
                                )}
                            </strong>

                            <span>
                                ${count}
                            </span>

                        </div>


                        <div class="progress-line">

                            <div
                                class="progress-fill"
                                style="
                                width:${percentage}%">
                            </div>

                        </div>

                    </div>

                `;

            }
        )
        .join("");


    document.getElementById(
        "platformAnalytics"
    ).innerHTML = `

        <div
            class="ticket">

            <strong>
                Total Maintenance Tickets
            </strong>

            <h2
                style="
                color:var(--navy);
                margin-top:6px">

                ${data.tickets.length}

            </h2>

        </div>


        <div
            class="ticket">

            <strong>
                Resolved Tickets
            </strong>

            <h2
                style="
                color:var(--green);
                margin-top:6px">

                ${
                    data.tickets.filter(
                        t =>
                        t.status ===
                        "Resolved"
                    ).length
                }

            </h2>

        </div>


        <div
            class="ticket">

            <strong>
                Marketplace Listings
            </strong>

            <h2
                style="
                color:var(--navy);
                margin-top:6px">

                ${data.listings.length}

            </h2>

        </div>

    `;

}


/* =========================================================
   MARKETPLACE
========================================================= */

function renderMarketplace(){

    const search =
        (
            document.getElementById(
                "marketSearch"
            ).value || ""
        )
        .toLowerCase();


    const category =
        document.getElementById(
            "marketCategory"
        ).value;


    const filtered =
        data.listings.filter(
            item => {

                const matchesSearch =

                    item.name
                    .toLowerCase()
                    .includes(search)

                    ||

                    item.description
                    .toLowerCase()
                    .includes(search);


                const matchesCategory =

                    category === "All"

                    ||

                    item.category ===
                    category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    const grid =
        document.getElementById(
            "marketGrid"
        );


    if(!filtered.length){

        grid.innerHTML =
            `<div class="empty">
                No marketplace listings found.
            </div>`;

        return;

    }


    grid.innerHTML =
        filtered
        .map(item => `

            <div class="product-card">


                <div class="product-image">

                    ${item.icon}

                </div>


                <div class="product-body">

                    <h4>
                        ${safe(
                            item.name
                        )}
                    </h4>


                    <div class="product-price">

                        ₹${item.price}

                    </div>


                    <div class="product-meta">

                        ${safe(
                            item.category
                        )}
                        •
                        ${safe(
                            item.condition
                        )}

                    </div>


                    <div class="product-meta">

                        Seller:
                        ${safe(
                            item.seller
                        )}

                    </div>


                    <p
                        style="
                        color:var(--muted);
                        font-size:10px;
                        line-height:1.5;
                        margin-bottom:10px">

                        ${safe(
                            item.description
                        )}

                    </p>


                    <button
                        class="btn btn-primary btn-small"
                        onclick="
                        requestItem(
                            '${item.id}'
                        )">

                        Contact Seller

                    </button>

                </div>

            </div>

        `)
        .join("");

}


/* =========================================================
   CREATE LISTING
========================================================= */

document
.getElementById("listingForm")
.addEventListener(
    "submit",
    function(e){

        e.preventDefault();


        const item = {

            id:
                "M-" +
                Date.now(),

            name:
                document.getElementById(
                    "pName"
                ).value,

            price:
                Number(
                    document.getElementById(
                        "pPrice"
                    ).value
                ),

            category:
                document.getElementById(
                    "pCategory"
                ).value,

            condition:
                document.getElementById(
                    "pCondition"
                ).value,

            seller:
                data.profile.name,

            icon:"📦",

            description:
                document.getElementById(
                    "pDescription"
                ).value

        };


        data.listings.unshift(
            item
        );


        save();


        notify(
            "Marketplace Listing",
            "Your item has been published."
        );


        closeModal(
            "listingModal"
        );


        this.reset();

        refresh();

    }
);


document
.getElementById("marketSearch")
.addEventListener(
    "input",
    renderMarketplace
);


document
.getElementById("marketCategory")
.addEventListener(
    "change",
    renderMarketplace
);


function requestItem(id){

    const item =
        data.listings.find(
            x => x.id === id
        );


    if(!item)
        return;


    notify(

        "Marketplace Request",

        `Interest sent to ${item.seller} for ${item.name}.`

    );


    alert(
        "Request sent to seller.\n\n" +
        "This demo can later be connected to real chat/payment services."
    );

}


/* =========================================================
   LOST AND FOUND
========================================================= */

function renderLost(){

    const search =
        (
            document.getElementById(
                "lostSearch"
            ).value || ""
        )
        .toLowerCase();


    const type =
        document.getElementById(
            "lostType"
        ).value;


    const filtered =
        data.lost.filter(
            item => {

                const searchMatch =
                    item.item
                    .toLowerCase()
                    .includes(search)

                    ||

                    item.location
                    .toLowerCase()
                    .includes(search);


                const typeMatch =
                    type === "All"
                    ||
                    item.type === type;


                return (
                    searchMatch &&
                    typeMatch
                );

            }
        );


    const grid =
        document.getElementById(
            "lostGrid"
        );


    grid.innerHTML =
        filtered
        .map(item => `

            <div class="lost-card">

                <div class="lost-icon">

                    ${item.icon}

                </div>


                <span
                    class="badge ${
                        item.type === "Lost"
                        ? "badge-red"
                        : "badge-green"
                    }">

                    ${safe(
                        item.type
                    )}

                </span>


                <h3
                    style="
                    color:var(--navy);
                    margin-top:9px">

                    ${safe(
                        item.item
                    )}

                </h3>


                <p
                    style="
                    color:var(--muted);
                    font-size:11px;
                    margin-top:7px">

                    📍
                    ${safe(
                        item.location
                    )}

                </p>


                <p
                    style="
                    color:var(--muted);
                    font-size:11px;
                    margin-top:5px">

                    📅
                    ${safe(
                        item.date
                    )}

                </p>


                <p
                    style="
                    color:var(--muted);
                    font-size:11px;
                    line-height:1.5;
                    margin-top:10px">

                    ${safe(
                        item.description
                    )}

                </p>


                <button
                    class="btn btn-primary btn-small"
                    style="margin-top:12px"
                    onclick="
                    claimLostItem(
                        '${item.id}'
                    )">

                    ${
                        item.type === "Found"
                        ? "This Is Mine"
                        : "Contact Reporter"
                    }

                </button>

            </div>

        `)
        .join("");

}


document
.getElementById("lostSearch")
.addEventListener(
    "input",
    renderLost
);


document
.getElementById("lostType")
.addEventListener(
    "change",
    renderLost
);


document
.getElementById("lostForm")
.addEventListener(
    "submit",
    function(e){

        e.preventDefault();


        data.lost.unshift({

            id:
                "L-" +
                Date.now(),

            type:
                document.getElementById(
                    "lType"
                ).value,

            item:
                document.getElementById(
                    "lItem"
                ).value,

            location:
                document.getElementById(
                    "lLocation"
                ).value,

            date:
                document.getElementById(
                    "lDate"
                ).value,

            description:
                document.getElementById(
                    "lDescription"
                ).value,

            status:"Open",

            icon:"🔎"

        });


        save();


        notify(
            "Lost & Found",
            "Your report has been published."
        );


        closeModal(
            "lostModal"
        );


        this.reset();

        refresh();

    }
);


function claimLostItem(id){

    notify(

        "Lost & Found Request",

        "Your claim/request has been recorded."

    );


    alert(
        "Your request has been recorded."
    );

}


/* =========================================================
   EVENTS
========================================================= */

function renderEvents(){

    const grid =
        document.getElementById(
            "eventGrid"
        );


    grid.innerHTML =
        data.events
        .map(event => `

            <div class="event-card">


                <div class="event-date">

                    📅
                    ${safe(
                        event.date
                    )}

                </div>


                <h4>
                    ${safe(
                        event.name
                    )}
                </h4>


                <p>

                    📍
                    ${safe(
                        event.venue
                    )}

                </p>


                <p>

                    👥
                    ${safe(
                        event.organizer
                    )}

                </p>


                <p
                    style="margin-top:8px">

                    ${safe(
                        event.description
                    )}

                </p>


                <p
                    style="
                    margin-top:10px;
                    color:var(--orange);
                    font-weight:bold">

                    ${
                        event.registrations
                    }
                    students registered

                </p>


                <button
                    class="btn btn-primary btn-small"
                    style="margin-top:10px"
                    onclick="
                    registerEvent(
                        '${event.id}'
                    )">

                    Register

                </button>

            </div>

        `)
        .join("");

}


document
.getElementById("eventForm")
.addEventListener(
    "submit",
    function(e){

        e.preventDefault();


        data.events.unshift({

            id:
                "E-" +
                Date.now(),

            name:
                document.getElementById(
                    "eName"
                ).value,

            date:
                document.getElementById(
                    "eDate"
                ).value,

            venue:
                document.getElementById(
                    "eVenue"
                ).value,

            organizer:
                document.getElementById(
                    "eOrganizer"
                ).value,

            description:
                document.getElementById(
                    "eDescription"
                ).value,

            registrations:0

        });


        save();


        notify(
            "Campus Event",
            "Event published successfully."
        );


        closeModal(
            "eventModal"
        );


        this.reset();

        refresh();

    }
);


function registerEvent(id){

    if(
        data.registrations.includes(id)
    ){

        alert(
            "You are already registered."
        );

        return;

    }


    data.registrations.push(
        id
    );


    const event =
        data.events.find(
            e => e.id === id
        );


    if(event)
        event.registrations++;


    save();


    notify(

        "Event Registration",

        `You registered for ${event.name}.`

    );


    refresh();


    alert(
        "Registration successful!"
    );

}


/* =========================================================
   OPPORTUNITIES
========================================================= */

function renderOpportunities(){

    const search =
        (
            document.getElementById(
                "oppSearch"
            ).value || ""
        )
        .toLowerCase();


    const type =
        document.getElementById(
            "oppType"
        ).value;


    const filtered =
        data.opportunities.filter(
            item => {

                const searchMatch =

                    item.title
                    .toLowerCase()
                    .includes(search)

                    ||

                    item.company
                    .toLowerCase()
                    .includes(search);


                const typeMatch =

                    type === "All"
                    ||
                    item.type === type;


                return (
                    searchMatch &&
                    typeMatch
                );

            }
        );


    document.getElementById(
        "opportunityGrid"
    ).innerHTML =

        filtered
        .map(item => `

            <div class="opportunity">

                <div
                    style="
                    font-size:27px">

                    ${item.icon}

                </div>


                <span
                    class="badge ${
                        item.type ===
                        "Internship"
                        ? "badge-blue"
                        : "badge-orange"
                    }">

                    ${safe(
                        item.type
                    )}

                </span>


                <h4>
                    ${safe(
                        item.title
                    )}
                </h4>


                <p>

                    🏢
                    ${safe(
                        item.company
                    )}

                </p>


                <p>

                    📍
                    ${safe(
                        item.location
                    )}

                </p>


                <p
                    style="margin-top:7px">

                    ${safe(
                        item.description
                    )}

                </p>


                <p
                    style="
                    margin-top:9px;
                    color:var(--orange);
                    font-weight:bold">

                    Deadline:
                    ${safe(
                        item.deadline
                    )}

                </p>


                <button
                    class="btn btn-primary btn-small"
                    style="margin-top:12px"
                    onclick="
                    applyOpportunity(
                        '${item.id}'
                    )">

                    Apply

                </button>

            </div>

        `)
        .join("");

}


document
.getElementById("oppSearch")
.addEventListener(
    "input",
    renderOpportunities
);


document
.getElementById("oppType")
.addEventListener(
    "change",
    renderOpportunities
);


function applyOpportunity(id){

    if(
        data.applications.includes(id)
    ){

        alert(
            "You have already applied."
        );

        return;

    }


    data.applications.push(
        id
    );


    const opportunity =
        data.opportunities.find(
            x => x.id === id
        );


    save();


    notify(

        "Application Submitted",

        `Application submitted for ${opportunity.title}.`

    );


    alert(
        "Application submitted successfully!"
    );

}


/* =========================================================
   PROFILE
========================================================= */

function saveProfile(){

    data.profile = {

        name:
            document.getElementById(
                "profileName"
            ).value,

        id:
            document.querySelectorAll(
                "#profile input"
            )[1].value,

        hostel:
            document.querySelectorAll(
                "#profile input"
            )[2].value,

        room:
            document.querySelectorAll(
                "#profile input"
            )[3].value

    };


    save();


    notify(
        "Profile Updated",
        "Your profile was saved."
    );


    alert(
        "Profile saved."
    );

}


function renderProfile(){

    document.getElementById(
        "profileName"
    ).value =
        data.profile.name;


    document.getElementById(
        "profileActivity"
    ).innerHTML = `

        <div class="ticket">

            <strong>
                Maintenance Tickets
            </strong>

            <p class="ticket-meta">

                ${data.tickets.length}
                total tickets

            </p>

        </div>


        <div class="ticket">

            <strong>
                Marketplace Listings
            </strong>

            <p class="ticket-meta">

                ${data.listings.length}
                listings

            </p>

        </div>


        <div class="ticket">

            <strong>
                Event Registrations
            </strong>

            <p class="ticket-meta">

                ${data.registrations.length}
                registrations

            </p>

        </div>


        <div class="ticket">

            <strong>
                Opportunity Applications
            </strong>

            <p class="ticket-meta">

                ${data.applications.length}
                applications

            </p>

        </div>

    `;

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard(){

    document.getElementById(
        "dashTickets"
    ).textContent =
        data.tickets.length;


    document.getElementById(
        "dashListings"
    ).textContent =
        data.listings.length;


    document.getElementById(
        "dashEvents"
    ).textContent =
        data.events.length;


    document.getElementById(
        "dashOpportunities"
    ).textContent =
        data.opportunities.length;


    document.getElementById(
        "recentActivity"
    ).innerHTML = `

        <div class="ticket">

            🎫

            <strong>
                ${data.tickets.length}
                maintenance tickets
            </strong>

            <p class="ticket-meta">
                Smart complaint tracking
            </p>

        </div>


        <div class="ticket">

            🛍️

            <strong>
                ${data.listings.length}
                marketplace listings
            </strong>

            <p class="ticket-meta">
                Student-to-student campus exchange
            </p>

        </div>


        <div class="ticket">

            🎉

            <strong>
                ${data.events.length}
                campus events
            </strong>

            <p class="ticket-meta">
                Discover campus activities
            </p>

        </div>


        <div class="ticket">

            💼

            <strong>
                ${data.opportunities.length}
                opportunities
            </strong>

            <p class="ticket-meta">
                Internships and hackathons
            </p>

        </div>

    `;

}


/* =========================================================
   ADMIN STATISTICS
========================================================= */

function updateAdminStats(){

    document.getElementById(
        "adminTickets"
    ).textContent =
        data.tickets.length;


    document.getElementById(
        "adminListings"
    ).textContent =
        data.listings.length;


    document.getElementById(
        "adminEvents"
    ).textContent =
        data.events.length;


    document.getElementById(
        "adminOpportunities"
    ).textContent =
        data.opportunities.length;

}


/* =========================================================
   MODALS
========================================================= */

function openModal(id){

    document
    .getElementById(id)
    .classList.add("show");

}


function closeModal(id){

    document
    .getElementById(id)
    .classList.remove("show");

}


/* =========================================================
   REFRESH
========================================================= */

function refresh(){

    renderDashboard();

    renderMaintenance();

    renderMarketplace();

    renderLost();

    renderEvents();

    renderOpportunities();

    renderAdmin();

    renderProfile();

    updateAdminStats();

    renderNotifications();

}


/* =========================================================
   HTML SAFETY
========================================================= */

function safe(value){

    return String(
        value ?? ""
    )
    .replaceAll(
        "&",
        "&amp;"
    )
    .replaceAll(
        "<",
        "&lt;"
    )
    .replaceAll(
        ">",
        "&gt;"
    )
    .replaceAll(
        '"',
        "&quot;"
    )
    .replaceAll(
        "'",
        "&#039;"
    );

}


/* =========================================================
   START
========================================================= */

seedData();

refresh();
