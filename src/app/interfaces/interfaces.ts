export interface navbarItem {
    name: string;
    hrefId: string;
}

export interface Experience {
    title: string;
    company: string;
    dates: string;
}

export interface StackLogo {
    src: string;
    alt: string;
    color: string;
}

export interface Project {
    title: string;
    subtitle: string;
    img: string[];
    stackUsed: StackProject[];
}

export interface StackProject {
    name: string;
    color: string;
}

export interface Study {
    logo: string;
    location: string;
    name: string;
    date: string;
}