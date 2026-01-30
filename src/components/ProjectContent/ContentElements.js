import styled from "@emotion/styled";

export const SectionTitle = styled.div`
    font-size: 28px;
    color: var(--text-color);
    font-weight: 700;
    margin-bottom: 2.5rem;
`

export const Text = styled.div`
    color: var(--text-color);
    margin-bottom: 2.5rem;
`

export const Caption = styled.div`
    color: var(--text-color);
    margin-bottom: 2.5rem;
    margin-top: -0.75rem;
    font-style: italic;
    font-size: 0.95rem;
    text-align: center;
`

export const Image = styled.img`
    border-radius: 16px;
    overflow: hidden;
    margin: 0 auto;
    width: 50%;
    height: auto;
    margin-bottom: 2.5rem;

    @media (max-width: 1000px) {
        width: 90%;
    }
`